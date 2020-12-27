using Microsoft.EntityFrameworkCore.Migrations;

namespace TaxiService.Order.Migrations
{
    public partial class Third : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "To",
                table: "Reservations",
                newName: "OriginAddresses");

            migrationBuilder.RenameColumn(
                name: "From",
                table: "Reservations",
                newName: "DestinationAddresses");

            migrationBuilder.AddColumn<int>(
                name: "Distance",
                table: "Reservations",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Price",
                table: "Reservations",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Distance",
                table: "Reservations");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "Reservations");

            migrationBuilder.RenameColumn(
                name: "OriginAddresses",
                table: "Reservations",
                newName: "To");

            migrationBuilder.RenameColumn(
                name: "DestinationAddresses",
                table: "Reservations",
                newName: "From");
        }
    }
}
