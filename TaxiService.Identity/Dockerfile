#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build
WORKDIR /src
COPY ["TaxiService.Identity/TaxiService.Identity.csproj", "TaxiService.Identity/"]
RUN dotnet restore "TaxiService.Identity/TaxiService.Identity.csproj"
COPY . .
WORKDIR "/src/TaxiService.Identity"
RUN dotnet build "TaxiService.Identity.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "TaxiService.Identity.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "TaxiService.Identity.dll"]