using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;

const string FilePath = "media.json";

List<Media> LoadMedia()
{
    if (!File.Exists(FilePath)) return new List<Media>();
    
    string json = File.ReadAllText(FilePath);
    return JsonSerializer.Deserialize<List<Media>>(json) ?? new List<Media>();
}

void SaveMedia(List<Media> mediaList)
{
    string json = JsonSerializer.Serialize(mediaList, new JsonSerializerOptions { WriteIndented = true });
    File.WriteAllText(FilePath, json);
}


var mediaList = LoadMedia();

var builder = WebApplication.CreateBuilder(args);

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader());
});

var app = builder.Build();

app.UseCors("AllowAll");

app.MapGet("/media", () => Results.Ok(mediaList));

// Posting new media
app.MapPost("/media", (Media media) =>
{
    media.Id = mediaList.Count + 1;
    mediaList.Add(media);
    SaveMedia(mediaList);
    return Results.Created($"/media/{media.Id}", media);
});

// Getting all the reviews
app.MapGet("/media/{id}/reviews", (int id) =>
{
    var media = mediaList.FirstOrDefault(m => m.Id == id);
    if (media == null)
        return Results.NotFound("Media not found");

    return Results.Ok(media.Reviews);
}); 

// Posting new reviews
app.MapPost("/media/{id}/reviews", (int id, Reviews review) =>
{
    var media = mediaList.FirstOrDefault(m => m.Id == id);
    if (media == null)
        return Results.NotFound("Media not found");

    review.Id = media.Reviews.Count + 1;
    review.MediaId = id;

    media.Reviews.Add(review);
    SaveMedia(mediaList);
    return Results.Created($"/media/{id}/reviews/{review.Id}", review);
});


app.MapDelete("/media/{id}", (int id) =>
{
    var media = mediaList.FirstOrDefault(m => m.Id == id);
    if (media == null)
        return Results.NotFound("Media not found");

    mediaList.Remove(media);
    return Results.NoContent();
});

app.Run();