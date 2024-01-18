using NorthwindAuto;
using ServiceStack;

ServiceStack.Licensing.RegisterLicense("OSS BSD-3-Clause 2023 https://github.com/NetCoreApps/NorthwindAuto C623PT+qbRoeQ8S1/gJ2WpGY+8O/Rh97xyFx3RmIorDOGrKaW7fTbn9IBNlFkTbGzj1x/U6Pq/sPzIboSZazlJCSg9s+HNUop0SnhvN91Zm/STnw+G9E8JF79IOaxM1a0DCKAUrYnysyLAB3vcPJTDe+L60tlHhj9edz3kdEo3w=");

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register all services
builder.Services.AddServiceStack(typeof(MyServices).Assembly, c => {
    c.AddSwagger(o => {
        //o.AddJwtBearer();
        o.AddBasicAuth();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
    app.UseHttpsRedirection();
}

app.UseSwagger();
app.UseSwaggerUI();

app.UseServiceStack(new AppHost(), options =>
{
    options.MapEndpoints();
});

app.Run();