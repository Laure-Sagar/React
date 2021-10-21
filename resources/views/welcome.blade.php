<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div class="container">
        <div id="app"></div>
    </div>

    <div
        class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
            src="https://wallpapercave.com/wp/wp5135903.jpg" alt="Woman's Face">
        <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5">
                <p class="text-lg text-black font-semibold">
                    Erin Lindford
                </p>
                <p class="text-gray-500 font-medium">
                    Product Engineer
                </p>
            </div>
            <button className="focus:ring" disabled="disabled">
                Disabled
            </button>
            <button
                class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
        </div>
    </div>

    <script src="/js/app.js"></script>
</body>

</html>