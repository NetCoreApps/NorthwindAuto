using Funq;
using ServiceStack;
using ServiceStack.Configuration;
using ServiceStack.Data;
using ServiceStack.Html;
using ServiceStack.IO;
using ServiceStack.OrmLite;

[assembly: HostingStartup(typeof(NorthwindAuto.AppHost))]
namespace NorthwindAuto;

public class AppHost : AppHostBase, IHostingStartup
{
    public AppHost() : base("Northwind Auto", typeof(MyServices).Assembly) {}

    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context, services) => {
            // Register Database Connection, see: https://docs.servicestack.net/ormlite/
            services.AddSingleton<IDbConnectionFactory>(c => new OrmLiteConnectionFactory(
                context.HostingEnvironment.ContentRootPath.CombineWith("northwind.sqlite"),
                SqliteDialect.Provider));
        });

    public override void Configure(Container container)
    {
        SetConfig(new HostConfig { DebugMode = true });

        var wwwrootVfs = GetVirtualFileSource<FileSystemVirtualFiles>();
        Plugins.Add(new FilesUploadFeature(
            new UploadLocation("employees", wwwrootVfs, allowExtensions: FileExt.WebImages,
                writeAccessRole: RoleNames.AllowAnon,
                resolvePath: ctx => $"/profiles/employees/{ctx.Dto.GetId()}.{ctx.FileExtension}")));

        ConfigurePlugin<UiFeature>(feature => 
            feature.Info.BrandIcon = new ImageInfo { Uri = "/logo.svg", Cls = "w-8 h-8 mr-1" });

        Plugins.Add(new AutoQueryFeature {
            MaxLimit = 100,
            GenerateCrudServices = new GenerateCrudServices {
                AutoRegister = true,
                ServiceFilter = (op, req) => {
                    // Annotate all Auto generated Request DTOs with [Tag("Northwind")] attribute
                    op.Request.AddAttributeIfNotExists(new TagAttribute("Northwind"));
                },
                TypeFilter = (type, req) =>
                {
                    if (Icons.TryGetValue(type.Name, out var icon))
                        type.AddAttribute(new IconAttribute { Svg = Svg.Create(icon) });

                    if (type.Name == "Employee" || type.IsCrudCreateOrUpdate("Employee"))
                    {
                        type.Properties.RemoveAll(x => x.Name == "Photo");
                        type.ReorderProperty("PhotoPath", before: "Title")
                            .AddAttribute(new FormatAttribute(FormatMethods.IconRounded));
                        type.ReorderProperty("ReportsTo", after: "Title");
                        if (type.IsCrud())
                        {
                            type.Property("PhotoPath")
                                .AddAttribute(new InputAttribute { Type = Input.Types.File })
                                .AddAttribute(new UploadToAttribute("employees"));
                            type.Property("Notes")
                                .AddAttribute(new InputAttribute { Type = Input.Types.Textarea });
                        }
                        else if (type.Name == "Employee")
                        {
                            type.Property("ReportsTo").AddAttribute(
                                new RefAttribute { Model = "Employee", RefId = "Id", RefLabel = "LastName" });
                            type.Property("HomePhone").AddAttribute(new FormatAttribute(FormatMethods.LinkPhone));
                        }
                    }
                    else if (type.Name == "Order")
                    {
                        type.Properties.Where(x => x.Name.EndsWith("Date")).Each(p =>
                            p.AddAttribute(new IntlDateTime(DateStyle.Medium)));
                        type.Property("Freight").AddAttribute(new IntlNumber { Currency = NumberCurrency.USD });
                        type.Property("ShipVia").AddAttribute(
                            new RefAttribute { Model = "Shipper", RefId = "Id", RefLabel = "CompanyName" });
                    }
                    else if (type.Name == "OrderDetail")
                    {
                        type.Property("UnitPrice").AddAttribute(new IntlNumber { Currency = NumberCurrency.USD });
                        type.Property("Discount").AddAttribute(new IntlNumber(NumberStyle.Percent));
                    }
                    else if (type.Name == "EmployeeTerritory")
                    {
                        type.Property("TerritoryId").AddAttribute(
                            new RefAttribute { Model = "Territory", RefId = "Id", RefLabel = "TerritoryDescription" });
                    }
                    else if (type.Name is "Customer" or "Supplier" or "Shipper")
                    {
                        type.Property("Phone").AddAttribute(new FormatAttribute(FormatMethods.LinkPhone));
                        type.Property("Fax")?.AddAttribute(new FormatAttribute(FormatMethods.LinkPhone));
                    }
                },
            },
        });
    }
    public static Dictionary<string, string> Icons { get; } = new()
    {
        ["Category"] = "<path fill='currentColor' d='M20 5h-9.586L8.707 3.293A.997.997 0 0 0 8 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z'/>",
        ["Customer"] = "<path fill='currentColor' d='M19 2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4l2.29 2.29c.39.39 1.02.39 1.41 0L15 20h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3.3c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7S9.3 9.49 9.3 8s1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z'/>",
        ["Employee"] = "<path fill='currentColor' d='M19.745 4a2.25 2.25 0 0 1 2.25 2.25v11.505a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 17.755V6.25A2.25 2.25 0 0 1 4.25 4h15.495Zm0 1.5H4.25a.75.75 0 0 0-.75.75v11.505c0 .414.336.75.75.75l2.749-.001L7 15.75a1.75 1.75 0 0 1 1.606-1.744L8.75 14h6.495a1.75 1.75 0 0 1 1.744 1.607l.006.143l-.001 2.754h2.751a.75.75 0 0 0 .75-.75V6.25a.75.75 0 0 0-.75-.75ZM12 7a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z'/>",
        ["EmployeeTerritory"] = "<path fill='currentColor' d='M1 11v10h5v-6h4v6h5V11L8 6z'/><path fill='currentColor' d='M10 3v1.97l7 5V11h2v2h-2v2h2v2h-2v4h6V3H10zm9 6h-2V7h2v2z'/>",
        ["Order"] = "<path fill='currentColor' d='M9 20c0 1.1-.9 2-2 2s-1.99-.9-1.99-2S5.9 18 7 18s2 .9 2 2zm8-2c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm.396-5a2 2 0 0 0 1.952-1.566L21 5H7V4a2 2 0 0 0-2-2H3v2h2v11a2 2 0 0 0 2 2h12a2 2 0 0 0-2-2H7v-2h10.396z'/>",
        ["OrderDetail"] = "<path fill='currentColor' d='M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.002 14H4z'/><path fill='currentColor' d='M6 7h12v2H6zm0 4h12v2H6zm0 4h6v2H6z'/>",
        ["Product"] = "<g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'/><path d='M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12'/></g>",
        ["Region"] = "<path fill='currentColor' d='M12 2c3.31 0 6 2.66 6 5.95C18 12.41 12 19 12 19S6 12.41 6 7.95C6 4.66 8.69 2 12 2m0 4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 13c0 2.21-3.58 4-8 4s-8-1.79-8-4c0-1.29 1.22-2.44 3.11-3.17l.64.91C6.67 17.19 6 17.81 6 18.5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5c0-.69-.67-1.31-1.75-1.76l.64-.91C18.78 16.56 20 17.71 20 19Z'/>",
        ["Shipper"] = "<path fill='currentColor' d='M4 10.4V4a1 1 0 0 1 1-1h5V1h4v2h5a1 1 0 0 1 1 1v6.4l1.086.326a1 1 0 0 1 .682 1.2l-1.516 6.068A4.992 4.992 0 0 1 16 16a4.992 4.992 0 0 1-4 2a4.992 4.992 0 0 1-4-2a4.992 4.992 0 0 1-4.252 1.994l-1.516-6.068a1 1 0 0 1 .682-1.2L4 10.4zm2-.6L12 8l2.754.826l1.809.543L18 9.8V5H6v4.8zM4 20a5.978 5.978 0 0 0 4-1.528A5.978 5.978 0 0 0 12 20a5.978 5.978 0 0 0 4-1.528A5.978 5.978 0 0 0 20 20h2v2h-2a7.963 7.963 0 0 1-4-1.07A7.963 7.963 0 0 1 12 22a7.963 7.963 0 0 1-4-1.07A7.963 7.963 0 0 1 4 22H2v-2h2z'/>",
        ["Supplier"] = "<path fill='currentColor' d='M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z'/>",
        ["Territory"] = "<path fill='currentColor' d='M12 3L2 12h3v8h14v-8h3L12 3m0 4.7c2.1 0 3.8 1.7 3.8 3.8c0 3-3.8 6.5-3.8 6.5s-3.8-3.5-3.8-6.5c0-2.1 1.7-3.8 3.8-3.8m0 2.3a1.5 1.5 0 0 0-1.5 1.5A1.5 1.5 0 0 0 12 13a1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 12 10Z'/>",
    };
}

[Route("/hello")]
public class Hello : IReturn<StringResponse> {}
public class MyServices : Service
{
    public object Any(Hello request) => new StringResponse { Result = "Hello, World!" };
}