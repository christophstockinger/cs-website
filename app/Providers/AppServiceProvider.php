<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Vite-Assets root-relativ ausliefern statt absolut über asset().
        // Die Seite läuft unter mehreren Domains (.de und .tv) und wird per
        // Full Static Caching als eine Datei für alle Domains gecacht. Mit
        // absoluten URLs würde die Zweitdomain JS-Module und Fonts von der
        // Erstdomain laden – cross-origin und damit ohne CORS-Header blockiert.
        Vite::createAssetPathsUsing(fn (string $path, ?bool $secure = null) => '/'.ltrim($path, '/'));
    }
}
