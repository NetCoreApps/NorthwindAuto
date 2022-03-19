using NorthwindAuto;
using ServiceStack;

Licensing.RegisterLicense("OSS BSD-3-Clause 2022 https://github.com/NetCoreApps/NorthwindAuto ckEe9QZMp81KLdfriyot8eJX05KVNXOB+7xWoOCTIxOSLNCO0JkC6mTtx3kwEI1erMFOkNCPORt2RqvObrrni18wt6PYgua1lNatq5LuNErrdQKKb6b7MbObmJA118VLMQCkPNplBYwl0TeWex6wfVhUWtxgzLbEp+5NCjWTIio=");

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
    app.UseHttpsRedirection();
}

app.UseServiceStack(new AppHost());

app.Run();