using Microsoft.EntityFrameworkCore.Migrations;

namespace TaxiService.Order.Migrations
{
    public partial class Fourth : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Reservations");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "Reservations",
                newName: "UserId");

            migrationBuilder.AlterColumn<double>(
                name: "Price",
                table: "Reservations",
                type: "float",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<double>(
                name: "Distance",
                table: "Reservations",
                type: "float",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Reservations",
                newName: "LastName");

            migrationBuilder.AlterColumn<int>(
                name: "Price",
                table: "Reservations",
                type: "int",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.AlterColumn<int>(
                name: "Distance",
                table: "Reservations",
                type: "int",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Reservations",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
