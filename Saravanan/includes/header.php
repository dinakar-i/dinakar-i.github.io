 <header> 
    <!-- Top Bar -->
    <!-- <div class="container">
      <div style="background-color: gray;" class="top-bar">
        <div class="open-time">
          <p><i class="fa fa-envelope"></i><a href="mailto:anguraj79@rediffmail.com" style="color: #f0f0f0"> anguraj79@rediffmail.com  </a>                    
            <i class="fa fa fa-phone"></i><a href="tel:044-49596754" style="color: #f0f0f0">   044-49596754 </a>
          </p>
        </div>
        <div class="call">
            <p><i class="fa fa-phone"></i> <a href="tel:+91 97908 33331" style="color: #f0f0f0"> +91 97908 33331 </a></p>
        </div>
      </div>
    </div> -->
    
    <!-- Logo -->
    <div class="container">
      <div class="logo"> <a href="#"><img src="./company/download.jfif" alt="" height="72" width="350"></a> </div>
      
      <!-- Nav -->
      <nav>
        <ul id="ownmenu" class="ownmenu">
          <li class="active"><a href="index.php">HOME</a></li>
          <li><a href="#">ABOUT US</a>
            <ul class="dropdown">
              <!-- <li><a href="profile.php">Profile</a></li> -->
              <li><a href="certificate.php"> Our Certification</a></li>
              
              
            </ul>
          </li>
          <li><a href="controllers.php">Products</a>
            
          </li>
          <!-- <li><a href="#"> INDUSTRY</a></li>
          <li><a href="clients.php"> CLIENTS </a></li>
          <li><a href="enquiry.php"> ENQUIRY </a> -->
          
          </li>
          
          <li><button style="all: unset;" onclick="scrollToBottom()" ><a href="#"> Contact Us</a></button></li>
        </ul>
      </nav>
    </div>
  </header>  <!-- Header End --> 
  <script>
  function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth' // smooth scrolling animation
    });
  }
</script>