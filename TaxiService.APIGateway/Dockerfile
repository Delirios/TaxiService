#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build
WORKDIR /src
COPY ["TaxiService.APIGateway/TaxiService.APIGateway.csproj", "TaxiService.APIGateway/"]
RUN dotnet restore "TaxiService.APIGateway/TaxiService.APIGateway.csproj"
COPY . .
WORKDIR "/src/TaxiService.APIGateway"
RUN dotnet build "TaxiService.APIGateway.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "TaxiService.APIGateway.csproj" -c Release -o /app/publish

FROM base AS final
EXPOSE 80
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "TaxiService.APIGateway.dll"]