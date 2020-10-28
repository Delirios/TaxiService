using Microsoft.EntityFrameworkCore.Migrations;

namespace TaxiService.Order.Migrations
{
    public partial class AddedSeveralRows : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsClosed",
                table: "Reservations",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsPerformed",
                table: "Reservations",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsClosed",
                table: "Reservations");

            migrationBuilder.DropColumn(
                name: "IsPerformed",
                table: "Reservations");
        }
    }
}
