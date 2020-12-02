#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build
WORKDIR /src
COPY ["TaxiService.Discount/TaxiService.Discount.csproj", "TaxiService.Discount/"]
RUN dotnet restore "TaxiService.Discount/TaxiService.Discount.csproj"
COPY . .
WORKDIR "/src/TaxiService.Discount"
RUN dotnet build "TaxiService.Discount.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "TaxiService.Discount.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "TaxiService.Discount.dll"]
