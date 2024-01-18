using NorthwindAuto;
using ServiceStack;

ServiceStack.Licensing.RegisterLicense("OSS GPL-3.0 2024 https://github.com/NetCoreApps/NorthwindAuto wb4gnw/OgTgjDjG09jaZ2Xgy5AY3FqulMcWLt/w2TClZyGJ33DybS4lz+tmY9hq39RxX4RdCD2OZ4UWEk0iRXLozVi4bC8x2DDe/BFHGHkcGk+W+4VW02UolgxHHjRNdCP05kM8DlwlzgX2lyI654QlCdLOHZCERvm/iwyLlwpw=");

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
