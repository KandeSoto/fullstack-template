using Microsoft.EntityFrameworkCore;
using System;
using vacation.Data;
using vacation.Data.Models;
using vacation.Logic.Factories;
using vacation.Logic.Repositories.Contracts.Admin;
using vacation.Logic.Repositories.Services.Admin;
using vacation.Logic.ViewModels;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("https://localhost:54641")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Add services to the container.
builder.Services.AddDbContext<VacationContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

//injectio dependency
builder.Services.AddScoped<IArea, AreaLogic>();

//factory
builder.Services.AddScoped<IFactoryBase<Area, AreaVM>, AreaFactory>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseCors("AllowFrontend");

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
