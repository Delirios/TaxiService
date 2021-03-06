﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using TaxiService.Discount.DbContexts;

namespace TaxiService.Discount.Migrations
{
    [DbContext(typeof(DiscountDbContext))]
    partial class DiscountDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("TaxiService.Discount.Models.Coupon", b =>
                {
                    b.Property<int>("CouponId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("AlreadyUsed")
                        .HasColumnType("bit");

                    b.Property<int>("Amount")
                        .HasColumnType("int");

                    b.Property<string>("Code")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CouponId");

                    b.ToTable("Coupons");

                    b.HasData(
                        new
                        {
                            CouponId = 1,
                            AlreadyUsed = false,
                            Amount = 100,
                            Code = "First"
                        },
                        new
                        {
                            CouponId = 2,
                            AlreadyUsed = false,
                            Amount = 200,
                            Code = "Second"
                        },
                        new
                        {
                            CouponId = 3,
                            AlreadyUsed = false,
                            Amount = 300,
                            Code = "Third"
                        },
                        new
                        {
                            CouponId = 4,
                            AlreadyUsed = false,
                            Amount = 400,
                            Code = "Fourth"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
