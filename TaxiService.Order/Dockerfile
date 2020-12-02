#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build
WORKDIR /src
COPY ["TaxiService.Order/TaxiService.Order.csproj", "TaxiService.Order/"]
RUN dotnet restore "TaxiService.Order/TaxiService.Order.csproj"
COPY . .
WORKDIR "/src/TaxiService.Order"
RUN dotnet build "TaxiService.Order.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "TaxiService.Order.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "TaxiService.Order.dll"]
