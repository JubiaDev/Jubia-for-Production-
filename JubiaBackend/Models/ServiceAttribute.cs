using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

public class ServiceAttribute
{
    [Key]
    public int Id { get; set; }

    [Required]
    public string EnglishName { get; set; }

    [Required]
    public string ArabicName { get; set; }

    public int Sorting { get; set; }

    public ICollection<ServiceAttributeDetail> Details { get; set; }
}