using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace csc424_se2_organApp
{
    public partial class mytestContext : DbContext
    {
        public mytestContext()
        {
        }

        public mytestContext(DbContextOptions<mytestContext> options)
            : base(options)
        {
        }

        public virtual DbSet<IdName> IdName { get; set; }

        // Unable to generate entity type for table 'myschema.testtable'. Please see the warning messages.

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql("server=192.168.2.111;port=5432;Database=mytest;Username=pi;Password=almost");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.2-servicing-10034");

            modelBuilder.Entity<IdName>(entity =>
            {
                entity.ToTable("id_name");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.Name).HasColumnName("name");
            });
        }
    }
}
