#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build
WORKDIR /src
COPY ["TaxiService.News/TaxiService.News.csproj", "TaxiService.News/"]
RUN dotnet restore "TaxiService.News/TaxiService.News.csproj"
COPY . .
WORKDIR "/src/TaxiService.News"
RUN dotnet build "TaxiService.News.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "TaxiService.News.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "TaxiService.News.dll"]
