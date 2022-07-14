<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>GFMP</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
        <!-- Styles -->
        <link rel="stylesheet" href="/css/style.css">
       
    </head>
    <body >
      <!-- <div class="bigLogo">
        <div class="logo">Glen Forest Memorial Park</div>
      </div> -->
      
      <header>
                  
                  <a href="#" class="logo"><div class="logoCover"><img src="/assets/logo.png" alt="..."></div></a>   
                      <ul>
                        @if (Route::has('login'))
                            @auth
                        <li><a href="{{ url('/home') }}" >Home</a></li>
                              @else
                        <li><a href="{{ route('login') }}" >Log in</a></li>
                              @if (Route::has('register'))
                        <li><a href="{{ route('register') }}" >Register</a></li>
                      </ul>  
                              @endif
                            @endauth
                        @endif   
                    

            </header>
            
         <div class="banner">
            <div class="slider">
                <img src="/assets/bg3.jpg" alt="..." id="slideImg">
            </div>
         </div>
         <div class="leadingText">
              <p>PICNIC AND TRAILS STATUS: OPEN</p>
              <p>CLICK HERE TO VIEW PARK TRAILS GUIDE</p>
         </div>
         <div class="container crd">
            <div class="card">
              <div class="card-body">
                <img src="/assets/card1.png" alt="" id="cardImg">
              </div>
            </div>
          </div>
          <div class="container mission">
            <p>Our mission:</p>
            <p> <b>Preserve, Restore, and Enhance Memorial Park </b> for the enjoyment of all Houstonians, today and tomorrow</p>
          </div>
        <div class="container information">
          <div class="row first-row">
            <div class="col">
              <div class="card">
                <div class="card-body">
                 <h5 class="card-title">Park Information</h5>
                   <ul class="list-group list-group-flush">
                      <li class="list-group-item"><a href="#"><i class="bi bi-chevron-right"></i>park information</a></li>
                      <li class="list-group-item"><a href="#"><i class="bi bi-chevron-right"></i>park information</a></li>
                      <li class="list-group-item"><a href="#"><i class="bi bi-chevron-right"></i>park information</a></li>
                      <li class="list-group-item"><a href="#"><i class="bi bi-chevron-right"></i>park information</a></li>
                      <li class="list-group-item"><a href="#"><i class="bi bi-chevron-right"></i>park information</a></li>
                      <li class="list-group-item"><a href="#"><i class="bi bi-chevron-right"></i>park information</a></li>
                   </ul>
                   
                </div>
                <div class="card-footer "></div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <div class="peopleImg">
                    <img src="/assets/people.jpg" alt="..." class="peopleImgImg">
                  </div>
                  <p>Houston Rodeo Trail Riders</p>
                  <p>return to Memorial Park</p>
                 <button type="button" class="btn btn-outline-success">Read More</button>
                </div>
                <div class="card-footer"></div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
               
                </div>
                <div class="card-footer "></div>
              </div>
            </div>
          </div>
          <div class="row second-row">
            <div class="card">
                 <div class="card-header">
                    <h5>FEATURED AT MEMORIAL PARK CONSERVANCY</h5>
                 </div>
              <div class="card-body">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore vel porro enim aut quibusdam ipsa, molestiae assumenda saepe expedita aperiam quidem? Nihil reprehenderit sapiente eligendi deleniti consequuntur quisquam molestiae eos.</p>
              </div>
            </div>
          </div>
          <div class="row second-row">
            <div class="card">
                 <div class="card-header">
                    <h5>FEATURED AT MEMORIAL PARK CONSERVANCY</h5>
                 </div>
              <div class="card-body">
                <div class="row">
                  <div class="col"><img src="/assets/building.svg" alt="..."></div>
                  <div class="col"><img src="/assets/house.svg" alt="..."></div>
                  <div class="col"><img src="/assets/bank.svg" alt="..."></div>
                 
                </div>
              </div>
            </div>
          </div>
           <div class="row first-row">
            <div class="col">
              <div class="card">
                <div class="card-body">
                 <div class="peopleImg">
                    <img src="/assets/people1.jpg" alt="..." class="peopleImgImg">
                  </div>
                </div>
                <div class="card-footer "></div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
                   <div class="peopleImg">
                    <img src="/assets/people2.jpg" alt="..." class="peopleImgImg">
                  </div>
                </div>
                <div class="card-footer"></div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <div class="peopleImg">
                    <img src="/assets/people3.jpg" alt="..." class="peopleImgImg">
                  </div>
                </div>
                <div class="card-footer "></div>
              </div>
            </div>
          </div>
        </div>
        
       <footer>
        <div class="container foot">
          <div class="row">
            <div class="col f-col">
              <img src="/assets/logo.png" alt="..." id="footLogo">
            </div>
            <div class="col f-col">
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div class="col f-col"></div>
          </div>
          <div class="row">
              <div class="col s-col"><img src="/assets/facebook.svg" alt=""></div>
              <div class="col s-col"><img src="/assets/instagram.svg" alt=""></div>
              <div class="col s-col"><img src="/assets/twitter.svg" alt=""></div>
              <div class="col s-col"><img src="/assets/whatsapp.svg" alt=""></div>
          </div>
        </div>
       </footer>
    </body>
     <script src="/js/landingPage.js"></script>
</html>
