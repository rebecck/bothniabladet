using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ImageBankContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

// Create db in code 
var scope = app.Services.CreateScope();
// Create scoop, and then we can store our Service above (ImageBankContext)
var context = scope.ServiceProvider.GetRequiredService<ImageBankContext>();
// Create logger, we use the ILogger Service. Program = typ we execute and want to log 
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
try
{
    // Create db if not exist 
    context.Database.Migrate();  
    // Use our initialize method from our static DbInitializer class to initialize db with our context we created above
    DbInitializer.Initialize(context); 
}
catch (Exception ex)
{
    logger.LogError(ex, "A problem occurred during migration");
}
app.Run();
