using Microsoft.EntityFrameworkCore.Migrations;

namespace TaxiService.Order.Migrations
{
    public partial class Second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsClosed",
                table: "Reservations");

            migrationBuilder.DropColumn(
                name: "IsPerformed",
                table: "Reservations");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Reservations",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Reservations",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Reservations");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Reservations");

            migrationBuilder.AddColumn<bool>(
                name: "IsClosed",
                table: "Reservations",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsPerformed",
                table: "Reservations",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
