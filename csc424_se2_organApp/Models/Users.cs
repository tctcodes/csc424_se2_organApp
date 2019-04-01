using System;
using System.Collections.Generic;

namespace csc424_se2_organApp.Models
{
    public partial class Users
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public int? Id { get; set; }
    }
}
