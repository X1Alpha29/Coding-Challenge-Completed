public class Media
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty; 
    public string Description { get; set; } = string.Empty;
    public List<Reviews> Reviews { get; set; } = new();
}
