using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities;

[Table("Photos")]
public class Photo
{
    public int Id { get; set; }
    public required string Url { get; set; }
    public bool IsMain { get; set; }
    public string? PublicId { get; set; }

    // Navigation properties to ensure integrity(Entity/referential) with AppUser
    public int AppUserId { get; set; }
    public AppUser AppUser { get; set; } = null!; // Non-nullable reference type, initialized later
} 