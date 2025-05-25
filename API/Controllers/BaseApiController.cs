using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BaseApiController : ControllerBase
{
    // This class can be used to add common functionality for all API controllers
    // For example, you can add custom exception handling, logging, etc.
}
// You can also add common methods that can be used by all controllers
// For example, a method to return a standardized response format