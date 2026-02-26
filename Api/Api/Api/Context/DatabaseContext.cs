using Api.Entity;
using Api.Enum;
using Microsoft.EntityFrameworkCore;
using System;

namespace Api.Context
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

        public DbSet<Card> Cards { get; set; }
        public DbSet<Plan> Plans{ get; set; }
    }
}
