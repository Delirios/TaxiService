#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build
WORKDIR /src
COPY ["TaxiService.CarCatalog/TaxiService.CarCatalog.csproj", "TaxiService.CarCatalog/"]
RUN dotnet restore "TaxiService.CarCatalog/TaxiService.CarCatalog.csproj"
COPY . .
WORKDIR "/src/TaxiService.CarCatalog"
RUN dotnet build "TaxiService.CarCatalog.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "TaxiService.CarCatalog.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "TaxiService.CarCatalog.dll"]
