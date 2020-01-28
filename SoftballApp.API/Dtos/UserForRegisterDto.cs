using System.ComponentModel.DataAnnotations;

namespace SoftballApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(25, MinimumLength = 8, ErrorMessage = "You must use a password between 8 & 25 characters long!")]
        public string Password { get; set; }
    }
}