using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JubiaBackend.Data;
using JubiaBackend.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class ServiceAttributesController : ControllerBase
{
    private readonly JubiaDbContext _context;

    public ServiceAttributesController(JubiaDbContext context) => _context = context;

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ServiceAttribute>>> Get() =>
        await _context.ServiceAttributes
            .Include(a => a.Details)
            .OrderBy(a => a.Sorting)
            .ToListAsync();

    [HttpGet("{id}")]
    public async Task<ActionResult<ServiceAttribute>> Get(int id)
    {
        var item = await _context.ServiceAttributes
            .Include(a => a.Details)
            .FirstOrDefaultAsync(a => a.Id == id);
        if (item == null) return NotFound();
        return item;
    }

    [HttpPost]
    public async Task<ActionResult<ServiceAttribute>> Post([FromBody] ServiceAttributeDto dto)
    {
        if (string.IsNullOrWhiteSpace(dto.EnglishName) || string.IsNullOrWhiteSpace(dto.ArabicName))
            return BadRequest("EnglishName and ArabicName are required.");

        var item = new ServiceAttribute
        {
            EnglishName = dto.EnglishName.Trim(),
            ArabicName = dto.ArabicName.Trim(),
            Sorting = dto.Sorting
        };

        _context.ServiceAttributes.Add(item);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(Get), new { id = item.Id }, item);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, [FromBody] ServiceAttributeDto dto)
    {
        var item = await _context.ServiceAttributes.FindAsync(id);
        if (item == null) return NotFound();

        item.EnglishName = dto.EnglishName.Trim();
        item.ArabicName = dto.ArabicName.Trim();
        item.Sorting = dto.Sorting;

        _context.Entry(item).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var item = await _context.ServiceAttributes.FindAsync(id);
        if (item == null) return NotFound();
        _context.ServiceAttributes.Remove(item);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    // Attribute Details CRUD

    [HttpGet("{id}/details")]
    public async Task<ActionResult<IEnumerable<ServiceAttributeDetail>>> GetDetails(int id)
    {
        var details = await _context.ServiceAttributeDetails
            .Where(d => d.ServiceAttributeId == id)
            .OrderBy(d => d.Sorting)
            .ToListAsync();
        return details;
    }

    [HttpPost("{id}/details")]
    public async Task<ActionResult<ServiceAttributeDetail>> PostDetail(int id, [FromBody] ServiceAttributeDetailDto detailDto)
    {
        if (string.IsNullOrWhiteSpace(detailDto.EnglishName) || string.IsNullOrWhiteSpace(detailDto.ArabicName))
            return BadRequest("EnglishName and ArabicName are required.");

        var detail = new ServiceAttributeDetail
        {
            EnglishName = detailDto.EnglishName.Trim(),
            ArabicName = detailDto.ArabicName.Trim(),
            Sorting = detailDto.Sorting,
            ServiceAttributeId = id
        };

        _context.ServiceAttributeDetails.Add(detail);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetDetails), new { id = id }, detail);
    }

    [HttpPut("details/{detailId}")]
    public async Task<IActionResult> PutDetail(int detailId, [FromBody] ServiceAttributeDetailDto detailDto)
    {
        var detail = await _context.ServiceAttributeDetails.FindAsync(detailId);
        if (detail == null) return NotFound();

        detail.EnglishName = detailDto.EnglishName.Trim();
        detail.ArabicName = detailDto.ArabicName.Trim();
        detail.Sorting = detailDto.Sorting;

        _context.Entry(detail).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("details/{detailId}")]
    public async Task<IActionResult> DeleteDetail(int detailId)
    {
        var detail = await _context.ServiceAttributeDetails.FindAsync(detailId);
        if (detail == null) return NotFound();
        _context.ServiceAttributeDetails.Remove(detail);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}

// DTOs for POST/PUT (use only needed fields)
public class ServiceAttributeDto
{
    public string EnglishName { get; set; }
    public string ArabicName { get; set; }
    public int Sorting { get; set; }
}

public class ServiceAttributeDetailDto
{
    public string EnglishName { get; set; }
    public string ArabicName { get; set; }
    public int Sorting { get; set; }
}