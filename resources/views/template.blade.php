<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>Inosoft - Frontend Engineer Interview</title>

    <link rel="icon" sizes="16x16 24x24 32x32 48x48 64x64" href="images/favicon.svg">

    <link rel="stylesheet" type="text/css" href="css/app.css" />
</head>

<body>
    @yield('content')
    <script type="text/javascript" src="js/manifest.js"></script>
    <script type="text/javascript" src="js/vendor.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
</body>

</html>