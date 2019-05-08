using System;
using System.Collections.Generic;

namespace csc424_se2_organApp.Models
{
    /// <summary>User Model</summary>
    /// <remarks>3 attributes for User records, and one reference to Info Model</remarks>
    public partial class Users
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }

        public virtual Info Info { get; set; }
    }
}
