<?php

use Illuminate\Support\Facades\Route;

// Sitemap und robots.txt laufen durch Statamic, damit die absoluten URLs aus der
// Umgebung kommen und nicht im Repo festgeschrieben sind. Ohne Layout, damit nur
// der eigentliche Inhalt im Body landet.
Route::statamic('sitemap.xml', 'sitemap', [
    'layout' => false,
    'content_type' => 'xml',
]);

Route::statamic('robots.txt', 'robots', [
    'layout' => false,
    'content_type' => 'text',
]);
