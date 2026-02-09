namespace Application.Profiles.DTOs;

public class UserActivityDto
{
  public string Id { get; set; } = string.Empty;
  public string Title { get; set; } = string.Empty;
  public string Category { get; set; } = string.Empty;
  public DateTime Date { get; set; }
}
