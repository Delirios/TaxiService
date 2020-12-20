using Microsoft.EntityFrameworkCore.Migrations;

namespace TaxiService.Identity.Migrations
{
    public partial class Second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "UserRoles",
                keyColumn: "RoleId",
                keyValue: "4a9906ca-9824-4ea0-8bdf-480489e55d59");

            migrationBuilder.DeleteData(
                table: "UserRoles",
                keyColumn: "RoleId",
                keyValue: "eb04f571-d6a6-49b0-9194-61f268f91d72");

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: "154d0ccc-599c-456a-b311-5d298bc13b5b");

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: "72f406a3-bd18-47bf-8170-d96b5b3949f6");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "UserRoles",
                columns: new[] { "RoleId", "Role" },
                values: new object[,]
                {
                    { "26bffe7b-bf06-4641-b6de-9e4fdba32b7e", "Admin" },
                    { "91d1232d-a1c4-4dc0-9b0c-a26d1de2f628", "User" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "FirstName", "LastName", "Password", "PasswordHash", "PasswordSalt", "RoleId", "Username" },
                values: new object[,]
                {
                    { "eece6dd1-4f0f-45d6-b4f8-2ae0a6ebb6cd", null, null, "Pass1", null, null, null, "Test1" },
                    { "7519cf1f-9af7-4af1-8752-e91930069a87", null, null, "Pass2", null, null, null, "Test2" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "UserRoles",
                keyColumn: "RoleId",
                keyValue: "26bffe7b-bf06-4641-b6de-9e4fdba32b7e");

            migrationBuilder.DeleteData(
                table: "UserRoles",
                keyColumn: "RoleId",
                keyValue: "91d1232d-a1c4-4dc0-9b0c-a26d1de2f628");

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: "7519cf1f-9af7-4af1-8752-e91930069a87");

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: "eece6dd1-4f0f-45d6-b4f8-2ae0a6ebb6cd");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Users");

            migrationBuilder.InsertData(
                table: "UserRoles",
                columns: new[] { "RoleId", "Role" },
                values: new object[,]
                {
                    { "eb04f571-d6a6-49b0-9194-61f268f91d72", "Admin" },
                    { "4a9906ca-9824-4ea0-8bdf-480489e55d59", "User" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Password", "PasswordHash", "PasswordSalt", "RoleId", "Username" },
                values: new object[,]
                {
                    { "154d0ccc-599c-456a-b311-5d298bc13b5b", "Pass1", null, null, null, "Test1" },
                    { "72f406a3-bd18-47bf-8170-d96b5b3949f6", "Pass2", null, null, null, "Test2" }
                });
        }
    }
}
