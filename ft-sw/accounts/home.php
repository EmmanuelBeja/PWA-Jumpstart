<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Home page</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="../assets/css/fontawesome-free-5.1.0-web/css/all.css">

  </head>
  <body>

    <nav>
      <div class="navbar navbar-default">
        <ul>
          <li><a href="../index.php">Index</a></li>
          <li><a href="home.php">Home</a></li>
          <li><a href="profile.php">Profile</a></li>
        </ul>
      </div>
    </nav>

    <div class="row" style="margin-top:50px;">
      <div class="col-md-8 offset-md-2">
        <h1 style="text-align:center">
          <i class="fa fa-balance-scale" style="color:teal;"></i>
          <br>
          home
        </h1>
      </div>
      <div class="col-md-8 offset-md-2 jumbotron">
      </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="../assets/js/jquery-3.3.1.slim.min.js"></script>
    <script src="../assets/js/popper.min.js"></script>
    <script src="../assets/js/bootstrap.min.js"></script>

    <script type="text/javascript">
    $(() => {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker.register('../sw_site.js', {
            useCache: true
          }).then((reg) => {

            console.log('Registration successful, scope is:', reg.scope);

            reg.addEventListener('updatefound', () => {
              // A wild service worker has appeared in reg.installing!
              const newWorker = reg.installing;

              newWorker.state;
              // "installing" - the install event has fired, but not yet complete
              // "installed"  - install complete
              // "activating" - the activate event has fired, but not yet complete
              // "activated"  - fully active
              // "redundant"  - discarded. Either failed install, or it's been
              //                replaced by a newer version

              newWorker.addEventListener('statechange', () => {
                // newWorker.state has changed
                if (newWorker.state=='installing') {
                  console.log('[SW states]installing');
                }else if (newWorker.state=='installed') {
                  console.log('[SW states]installed');
                  newWorker.postMessage({action: "skipWaiting"});//if installed skipWaiting
                }else if (newWorker.state=='activating') {
                  console.log('[SW states]activating');
                }else if (newWorker.state=='activated') {
                  console.log('[SW states]activated');
                }else if (newWorker.state=='redundant') {
                  console.log('[SW states]redundant');
                }
              });
            });

          }).catch((error) => {
            console.log('Service worker registration failed, error:', error);
          });

        });

      }
    })

  </script>
  
  </body>
</html>
