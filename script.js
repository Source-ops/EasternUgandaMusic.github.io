          // Sample data to search through, each item now has a corresponding URL
const data = [
    { name: "&#9654; Mujene by Sasha powerz", url: "index.html" },
    { name: "&#9654; Munji By Agga International/ Producer: Wizmo @FKS...", url: "index.html" },
    { name: "Nambaddi ft Taliba Grace #2024", url: "index.html" },
    { name: "Mufubi:-- Bluzman Owomubantu...", url: "index.html" },
    { name: "Stress(48k).mp3", url: "index.html" },
    { name: "Omwana womwavu by Dr.Propa(360p).mp3", url: "index.html" },
    { name: "&#9654; Omukali Tawuduuka by Sasha Powers. Latest Lugwere music 2024@lugwevibeug(144p).mp3", url: "index.html" },
    { name: "&#9654; Omukali Tawuduuka by Sasha_Powers. Latest Lugwere music 2024@lugwevibeug(144p).mp3", url: "index.html" },
    { name: "loketoman - Bichuka chuka 1.mp3", url: "index.html" },
    
    { name: "Titus Vybz", url: "index.html" },
    { name: "Shani Joe", url: "index.html" },
    { name: "Wumalu Izzy", url: "index.html" },
    { name: "Snoks Ug", url: "index.html" },
    { name: "Kelvins", url: "index.html" },
    { name: "Rex", url: "index.html" },
    { name: "Skin Torch", url: "index.html" },
    { name: "Vocal", url: "index.html" },
    { name: "Easter 95", url: "index.html" },

    
    { name: "Draw Boy", url: "index.html" },
    { name: "Eddy Masaba", url: "index.html" },
    { name: "Tom Evoyaa", url: "index.html" },
    { name: "Mufubi:-- Bluzman Owomubantu...", url: "index.html" },
    { name: "Stress(48k).mp3", url: "index.html" },
    { name: "Omwana womwavu by Dr.Propa(360p).mp3", url: "index.html" },
    { name: "&#9654; Omukali Tawuduuka by Sasha Powers. Latest Lugwere music 2024@lugwevibeug(144p).mp3", url: "index.html" },
    { name: "&#9654; Omukali Tawuduuka by Sasha Powers. Latest Lugwere music 2024@lugwevibeug(144p).mp3", url: "index.html" },
    { name: "loketoman - Bichuka chuka 1.mp3", url: "index.html" },

    
    { name: "Mike Mwasame", url: "index.html" },
    { name: "mike Musale", url: "index.html" },
    { name: "Joefrey Manana", url: "index.html" },
    { name: "Mike Nyamwezi", url: "index.html" },
    { name: "Stress(48k).mp3", url: "index.html" },
    { name: "Omwana womwavu by Dr.Propa(360p).mp3", url: "index.html" },
    { name: " &#9654; Omukali Tawuduuka by Sasha Powers. Latest Lugwere music 2024@lugwevibeug(144p).mp3", url: "index.html" },
    { name: "&#9654; Omukali Tawuduuka by Sasha Powers. Latest Lugwere music 2024@lugwevibeug(144p).mp3", url: "index.html" },
    { name: "loketoman - Bichuka chuka 1.mp3", url: "index.html" },

    
    { name: "Mujene by Sasha powerz", url: "index.html" },
    { name: "Munji By Agga International/ Producer: Wizmo @FKS...", url: "index.html" },
    { name: "Nambaddi ft Taliba Grace #2024", url: "index.html" },
    { name: "Mufubi:-- Bluzman Owomubantu...", url: "index.html" },
    { name: "Stress(48k).mp3", url: "index.html" },
    { name: "Omwana womwavu by Dr.Propa(360p).mp3", url: "index.html" },
    { name: "&#9654; Omukali Tawuduuka by Sasha Powers  Latest Lugwere music 2024@lugwevibeug(144p).mp3", url: "index.html" },
    { name: "&#9654; Omukali Tawuduuka by Sasha Powers. Latest Lugwere music 2024@lugwevibeug(144p).mp3", url: "index.html" },
    { name: "loketoman - Bichuka chuka 1.mp3", url: "index.html" },

    
    { name: "Mujene by Sasha powerz", url: "index.html" },
    { name: "Munji By Agga International/ Producer: Wizmo @FKS...", url: "index.html" },
    { name: "Nambaddi ft Taliba Grace #2024", url: "index.html" },
    { name: "Mufubi:-- Bluzman Owomubantu...", url: "index.html" },
    { name: "Stress(48k).mp3", url: "index.html" },
    { name: "Omwana womwavu by Dr.Propa(360p).mp3", url: "index.html" },
    { name: "&#9654; Omukali Tawuduuka by Sasha Powers. Latest Lugwere music_2024@lugwevibeug(144p).mp3", url: "index.html" },
    { name: "&#9654; Omukali Tawuduuka by Sasha Powers. Latest Lugwere music 2024@lugwevibeug(144p).mp3", url: "index.html" },
    { name: "loketoman - Bichuka chuka 1.mp3", url: "index.html" },
  ];
  
  // Get references to the search input, button, and result list
  const searchInput = document.getElementById("search");
  const resultList = document.getElementById("result-list");
  const searchBtn = document.getElementById("search-btn");
  
  // Function to highlight search matches
  function highlightMatches(item, query) {
    // Create a case-insensitive regex to find the query term
    const regex = new RegExp(query, "gi");
    return item.replace(regex, (match) => `<span class="highlight">${match}</span>`);
  }
  
  // Function to filter and display search results
  function searchItems(query) {
    // Clear current results
    resultList.innerHTML = "";
  
    if (query.trim() === "") {
      resultList.style.display = 'none'; // Hide the result list if the query is empty
      return;
    }
  
    // Filter the data based on the query
    const filteredData = data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  
    // If there are results, display them
    if (filteredData.length > 0) {
      filteredData.forEach(item => {
        const listItem = document.createElement("li");
  
        // Create a link for each result
       const link = document.createElement("a");
        link.href = item.url; // The URL for this item
        link.innerHTML = highlightMatches(item.name, query); // Highlight matched text
  
        listItem.appendChild(link);
        resultList.appendChild(listItem);
      });
    } else {
      const noResultsItem = document.createElement("li");
      noResultsItem.textContent = "No results found. Type The right song title or artist name! Use letters no symbols... ";
      noResultsItem.classList.add("no-results");
      resultList.appendChild(noResultsItem);
    }
  
    // Show the result list when there are search results
    resultList.style.display = 'block';
  }
  




  // Add event listener for the input field to trigger search when Enter key is pressed
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      searchItems(searchInput.value);
    }
  });
  
  // Add event listener to the search button to trigger the search
  searchBtn.addEventListener("click", () => {
    searchItems(searchInput.value);
  });
  
  
  
  // Get references to elements
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const menuList = document.getElementById('menu-list');
  const menuItems = document.querySelectorAll('.menu-item');
  
  // Toggle menu visibility when hamburger icon is clicked
  hamburgerIcon.addEventListener('click', () => {
      menuList.classList.toggle('show'); // Toggle "show" class on menu
  });
  
  // Toggle dropdown visibility on mobile (click behavior)
  menuItems.forEach(item => {
      item.addEventListener('click', function(e) {
          // Check if the clicked item is a dropdown
          if (item.classList.contains('dropdown')) {
              // Toggle active class to show/hide the dropdown
              item.classList.toggle('active');
          }
      });
  });
  
  // Close the menu if the user clicks outside the menu
  document.addEventListener('click', function(e) {
      if (!menuList.contains(e.target) && !hamburgerIcon.contains(e.target)) {
          menuList.classList.remove('show');
      }
  });




  // SHARE FUNCTIONALITY 1
  document.getElementById('share-agga').addEventListener('click', () => {
    // Check if the browser supports the Web Share API
    if (navigator.share) {
      navigator.share({
        title: 'Agga International Is Now At Eastern Uganda Music Website',
        text: 'Click Link And Get In Touch!...',
        url: window.location.href,
      })
      .then(() => console.log('Shared successfully'))
      .catch((error) => console.error('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support Web Share API
      const shareData = {
        title: 'Agga International Is Now At Eastern Uganda Music Website',
        text: 'Click Link And Get In Touch!...',
        url: window.location.href,
      };
  
      // Create a modal share dialog
      const modal = document.createElement('div');
      modal.innerHTML = `
        <div class="modal-background" id="modal-background"></div>
        <div class="modal-content">
          <h2>Choose Platform To Share <span style="color: #4989ff;">Agga International</span> <br><br></h2>
          <ul>
            <li><a href="https://www.facebook.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#facebook"/></svg> Facebook</a></li>
            <li><a href="https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.text}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#twitter"/></svg> Twitter</a></li>
            <li><a href="https://www.linkedin.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#linkedIn"/></svg> LinkedIn</a></li>
            <li id="email-share"><a href="https://www.email.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#email"/></svg> Email</a></li>
          </ul>
            <h5 style="color: grey; border-bottom: 1px solid grey; cursor: none; padding-bottom: 2px;" >Click anywhere outside the share box to exit...<br></h5>
        </div>
      `;
  
      // Add event listener to close modal
      modal.querySelector('#modal-background').addEventListener('click', () => {
        modal.remove();
      });
  
      // Add event listener for email share
      modal.querySelector('#email-share').addEventListener('click', () => {
        const subject = shareData.title;
        const body = shareData.text + ' ' + shareData.url;
        const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
        // Check if mailto scheme is supported
        if (navigator.userAgent.match(/android/i)) {
          alert('Email sharing is not available on this device.');
        } else {
          window.location.href = mailtoUrl;
        }
      });
  
      // Add the modal to the page
      document.body.appendChild(modal);
    }
  });



    // SHARE FUNCTIONALITY 2
    document.getElementById('share-Bap').addEventListener('click', () => {
      // Check if the browser supports the Web Share API
      if (navigator.share) {
        navigator.share({
          title: 'Bap G Is Now At Eastern Uganda Music Website',
          text: 'Click Link And Get In Touch!...',
          url: window.location.href,
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
      } else {
        // Fallback for browsers that don't support Web Share API
        const shareData = {
          title: 'Bap G Is Now At Eastern Uganda Music Website',
          text: 'Click Link And Get In Touch!...',
          url: window.location.href,
        };
    
        // Create a modal share dialog
        const modal = document.createElement('div');
        modal.innerHTML = `
          <div class="modal-background" id="modal-background"></div>
          <div class="modal-content">
            <h2>Choose Platform To Share <span style="color: #4989ff;">Bap G</span><br><br></h2>
            <ul>
              <li><a href="https://www.facebook.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#facebook"/></svg> Facebook</a></li>
              <li><a href="https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.text}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#twitter"/></svg> Twitter</a></li>
              <li><a href="https://www.linkedin.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#linkedIn"/></svg> LinkedIn</a></li>
              <li id="email-share"><a href="https://www.email.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#email"/></svg> Email</a></li>
            </ul>
            <h5 style="color: grey; border-bottom: 1px solid grey; cursor: none; padding-bottom: 2px;" >Click anywhere outside the share box to exit...<br></h5>
          </div>
        `;
    
        // Add event listener to close modal
        modal.querySelector('#modal-background').addEventListener('click', () => {
          modal.remove();
        });
    
        // Add event listener for email share
        modal.querySelector('#email-share').addEventListener('click', () => {
          const subject = shareData.title;
          const body = shareData.text + ' ' + shareData.url;
          const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
          // Check if mailto scheme is supported
          if (navigator.userAgent.match(/android/i)) {
            alert('Email sharing is not available on this device.');
          } else {
            window.location.href = mailtoUrl;
          }
        });
    
        // Add the modal to the page
        document.body.appendChild(modal);
      }
    });




            // SHARE FUNCTIONALITY 4
    document.getElementById('share-urban-chief').addEventListener('click', () => {
      // Check if the browser supports the Web Share API
      if (navigator.share) {
        navigator.share({
          title: 'Urban Chief Is Now At Eastern Uganda Music Website',
          text: 'Click Link And Get In Touch!...',
          url: window.location.href,
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
      } else {
        // Fallback for browsers that don't support Web Share API
        const shareData = {
          title: 'Urban Chief Is Now At Eastern Uganda Music Website',
          text: 'Click Link And Get In Touch!...',
          url: window.location.href,
        };
    
        // Create a modal share dialog
        const modal = document.createElement('div');
        modal.innerHTML = `
          <div class="modal-background" id="modal-background"></div>
          <div class="modal-content">
            <h2>Choose Platform To Share <span style="color: #4989ff;">Urban Chief</span><br><br></h2>
            <ul>
              <li><a href="https://www.facebook.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#facebook"/></svg> Facebook</a></li>
              <li><a href="https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.text}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#twitter"/></svg> Twitter</a></li>
              <li><a href="https://www.linkedin.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#linkedIn"/></svg> LinkedIn</a></li>
              <li id="email-share"><a href="https://www.email.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#email"/></svg> Email</a></li>
            </ul>
            <h5 style="color: grey; border-bottom: 1px solid grey; cursor: none; padding-bottom: 2px;" >Click anywhere outside the share box to exit...<br></h5>
          </div>
        `;
    
        // Add event listener to close modal
        modal.querySelector('#modal-background').addEventListener('click', () => {
          modal.remove();
        });
    
        // Add event listener for email share
        modal.querySelector('#email-share').addEventListener('click', () => {
          const subject = shareData.title;
          const body = shareData.text + ' ' + shareData.url;
          const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
          // Check if mailto scheme is supported
          if (navigator.userAgent.match(/android/i)) {
            alert('Email sharing is not available on this device.');
          } else {
            window.location.href = mailtoUrl;
          }
        });
    
        // Add the modal to the page
        document.body.appendChild(modal);
      }
    });


        // SHARE FUNCTIONALITY 5
        document.getElementById('share-wizmo-kazikuba').addEventListener('click', () => {
          // Check if the browser supports the Web Share API
          if (navigator.share) {
            navigator.share({
              title: 'Wizmo Kazikuba Is Now At Eastern Uganda Music Website',
              text: 'Click Link And Get In Touch!...',
              url: window.location.href,
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
          } else {
            // Fallback for browsers that don't support Web Share API
            const shareData = {
              title: 'Wizmo Kazikuba Is Now At Eastern Uganda Music Website',
              text: 'Click Link And Get In Touch!...',
              url: window.location.href,
            };
        
            // Create a modal share dialog
            const modal = document.createElement('div');
            modal.innerHTML = `
              <div class="modal-background" id="modal-background"></div>
              <div class="modal-content">
                <h2>Choose Platform To Share <span style="color: #4989ff;">Wizmo Kazikuba</span><br><br></h2>
                <ul>
                  <li><a href="https://www.facebook.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#facebook"/></svg> Facebook</a></li>
                  <li><a href="https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.text}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#twitter"/></svg> Twitter</a></li>
                  <li><a href="https://www.linkedin.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#linkedIn"/></svg> LinkedIn</a></li>
                  <li id="email-share"><a href="https://www.email.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#email"/></svg> Email</a></li>
                </ul>
            <h5 style="color: grey; border-bottom: 1px solid grey; cursor: none; padding-bottom: 2px;" >Click anywhere outside the share box to exit...<br></h5>
              </div>
            `;
        
            // Add event listener to close modal
            modal.querySelector('#modal-background').addEventListener('click', () => {
              modal.remove();
            });
        
            // Add event listener for email share
            modal.querySelector('#email-share').addEventListener('click', () => {
              const subject = shareData.title;
              const body = shareData.text + ' ' + shareData.url;
              const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
              // Check if mailto scheme is supported
              if (navigator.userAgent.match(/android/i)) {
                alert('Email sharing is not available on this device.');
              } else {
                window.location.href = mailtoUrl;
              }
            });
        
            // Add the modal to the page
            document.body.appendChild(modal);
          }
        });


            // SHARE FUNCTIONALITY 6
    document.getElementById('share-sasha-powerz').addEventListener('click', () => {
      // Check if the browser supports the Web Share API
      if (navigator.share) {
        navigator.share({
          title: 'Sasha Powerz Is Now At Eastern Uganda Music Website',
          text: 'Click Link And Get In Touch!...',
          url: window.location.href,
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
      } else {
        // Fallback for browsers that don't support Web Share API
        const shareData = {
          title: 'Sasha Powerz Is Now At Eastern Uganda Music Website',
          text: 'Click Link And Get In Touch!...',
          url: window.location.href,
        };
    
        // Create a modal share dialog
        const modal = document.createElement('div');
        modal.innerHTML = `
          <div class="modal-background" id="modal-background"></div>
          <div class="modal-content">
            <h2>Choose Platform To Share <span style="color: #4989ff;">Sasha Powerz</span><br><br></h2>
            <ul>
              <li><a href="https://www.facebook.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#facebook"/></svg> Facebook</a></li>
              <li><a href="https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.text}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#twitter"/></svg> Twitter</a></li>
              <li><a href="https://www.linkedin.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#linkedIn"/></svg> LinkedIn</a></li>
              <li id="email-share"><a href="https://www.email.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#email"/></svg> Email</a></li>
            </ul>
            <h5 style="color: grey; border-bottom: 1px solid grey; cursor: none; padding-bottom: 2px;" >Click anywhere outside the share box to exit...<br></h5>
          </div>
        `;
    
        // Add event listener to close modal
        modal.querySelector('#modal-background').addEventListener('click', () => {
          modal.remove();
        });
    
        // Add event listener for email share
        modal.querySelector('#email-share').addEventListener('click', () => {
          const subject = shareData.title;
          const body = shareData.text + ' ' + shareData.url;
          const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
          // Check if mailto scheme is supported
          if (navigator.userAgent.match(/android/i)) {
            alert('Email sharing is not available on this device.');
          } else {
            window.location.href = mailtoUrl;
          }
        });
    
        // Add the modal to the page
        document.body.appendChild(modal);
      }
    });


        // SHARE FUNCTIONALITY 7
        document.getElementById('share-shine-stars').addEventListener('click', () => {
          // Check if the browser supports the Web Share API
          if (navigator.share) {
            navigator.share({
              title: 'Shine Stars Is Now At Eastern Uganda Music Website',
              text: 'Click Link And Get In Touch!...',
              url: window.location.href,
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
          } else {
            // Fallback for browsers that don't support Web Share API
            const shareData = {
              title: 'Shine Stars Is Now At Eastern Uganda Music Website',
              text: 'Click Link And Get In Touch!...',
              url: window.location.href,
            };
        
            // Create a modal share dialog
            const modal = document.createElement('div');
            modal.innerHTML = `
              <div class="modal-background" id="modal-background"></div>
              <div class="modal-content">
                <h2>Choose Platform To Share <span style="color: #4989ff;">Shine Stars</span><br><br></h2>
                <ul>
                  <li><a href="https://www.facebook.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#facebook"/></svg> Facebook</a></li>
                  <li><a href="https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.text}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#twitter"/></svg> Twitter</a></li>
                  <li><a href="https://www.linkedin.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#linkedIn"/></svg> LinkedIn</a></li>
                  <li id="email-share"><a href="https://www.email.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#email"/></svg> Email</a></li>
                </ul>
            <h5 style="color: grey; border-bottom: 1px solid grey; cursor: none; padding-bottom: 2px;" >Click anywhere outside the share box to exit...<br></h5>
              </div>
            `;
        
            // Add event listener to close modal
            modal.querySelector('#modal-background').addEventListener('click', () => {
              modal.remove();
            });
        
            // Add event listener for email share
            modal.querySelector('#email-share').addEventListener('click', () => {
              const subject = shareData.title;
              const body = shareData.text + ' ' + shareData.url;
              const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
              // Check if mailto scheme is supported
              if (navigator.userAgent.match(/android/i)) {
                alert('Email sharing is not available on this device.');
              } else {
                window.location.href = mailtoUrl;
              }
            });
        
            // Add the modal to the page
            document.body.appendChild(modal);
          }
        });


            // SHARE FUNCTIONALITY 8
    document.getElementById('share-taliba-grace').addEventListener('click', () => {
      // Check if the browser supports the Web Share API
      if (navigator.share) {
        navigator.share({
          title: 'Taliba Grace Is Now At Eastern Uganda Music Website',
          text: 'Click Link And Get In Touch!...',
          url: window.location.href,
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
      } else {
        // Fallback for browsers that don't support Web Share API
        const shareData = {
          title: 'Taliba Grace Is Now At Eastern Uganda Music Website',
          text: 'Click Link And Get In Touch!...',
          url: window.location.href,
        };
    
        // Create a modal share dialog
        const modal = document.createElement('div');
        modal.innerHTML = `
          <div class="modal-background" id="modal-background"></div>
          <div class="modal-content">
            <h2>Choose Platform To Share <span style="color: #4989ff;">Taliba Grace</span><br><br></h2>
            <ul>
              <li><a href="https://www.facebook.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#facebook"/></svg> Facebook</a></li>
              <li><a href="https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.text}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#twitter"/></svg> Twitter</a></li>
              <li><a href="https://www.linkedin.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#linkedIn"/></svg> LinkedIn</a></li>
              <li id="email-share"><a href="https://www.email.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#email"/></svg> Email</a></li>
            </ul>
            <h5 style="color: grey; border-bottom: 1px solid grey; cursor: none; padding-bottom: 2px;" >Click anywhere outside the share box to exit...<br></h5>
          </div>
        `;
    
        // Add event listener to close modal
        modal.querySelector('#modal-background').addEventListener('click', () => {
          modal.remove();
        });
    
        // Add event listener for email share
        modal.querySelector('#email-share').addEventListener('click', () => {
          const subject = shareData.title;
          const body = shareData.text + ' ' + shareData.url;
          const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
          // Check if mailto scheme is supported
          if (navigator.userAgent.match(/android/i)) {
            alert('Email sharing is not available on this device.');
          } else {
            window.location.href = mailtoUrl;
          }
        });
    
        // Add the modal to the page
        document.body.appendChild(modal);
      }
    });


        // SHARE FUNCTIONALITY 9
        document.getElementById('share-fireboy').addEventListener('click', () => {
          // Check if the browser supports the Web Share API
          if (navigator.share) {
            navigator.share({
              title: 'Fireboy Is Now At Eastern Uganda Music Website',
              text: 'Click Link And Get In Touch!...',
              url: window.location.href,
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
          } else {
            // Fallback for browsers that don't support Web Share API
            const shareData = {
              title: 'Fireboy Is Now At Eastern Uganda Music Website',
              text: 'Click Link And Get In Touch!...',
              url: window.location.href,
            };
        
            // Create a modal share dialog
            const modal = document.createElement('div');
            modal.innerHTML = `
              <div class="modal-background" id="modal-background"></div>
              <div class="modal-content">
                <h2>Choose Platform To Share <span style="color: #4989ff;">Fireboy</span><br><br></h2>
                <ul>
                  <li><a href="https://www.facebook.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#facebook"/></svg> Facebook</a></li>
                  <li><a href="https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.text}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#twitter"/></svg> Twitter</a></li>
                  <li><a href="https://www.linkedin.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#linkedIn"/></svg> LinkedIn</a></li>
                  <li id="email-share"><a href="https://www.email.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#email"/></svg> Email</a></li>
                </ul>
            <h5 style="color: grey; border-bottom: 1px solid grey; cursor: none; padding-bottom: 2px;" >Click anywhere outside the share box to exit...<br></h5>
              </div>
            `;
        
            // Add event listener to close modal
            modal.querySelector('#modal-background').addEventListener('click', () => {
              modal.remove();
            });
        
            // Add event listener for email share
            modal.querySelector('#email-share').addEventListener('click', () => {
              const subject = shareData.title;
              const body = shareData.text + ' ' + shareData.url;
              const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
              // Check if mailto scheme is supported
              if (navigator.userAgent.match(/android/i)) {
                alert('Email sharing is not available on this device.');
              } else {
                window.location.href = mailtoUrl;
              }
            });
        
            // Add the modal to the page
            document.body.appendChild(modal);
          }
        });


            // SHARE FUNCTIONALITY 10
    document.getElementById('share-promoter-wikid').addEventListener('click', () => {
      // Check if the browser supports the Web Share API
      if (navigator.share) {
        navigator.share({
          title: 'Promoter Wikid Is Now At Eastern Uganda Music Website',
          text: 'Click Link And Get In Touch!...',
          url: window.location.href,
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
      } else {
        // Fallback for browsers that don't support Web Share API
        const shareData = {
          title: 'Promoter Wikid Is Now At Eastern Uganda Music Website',
          text: 'Click Link And Get In Touch!...',
          url: window.location.href,
        };
    
        // Create a modal share dialog
        const modal = document.createElement('div');
        modal.innerHTML = `
          <div class="modal-background" id="modal-background"></div>
          <div class="modal-content">
            <h2>Choose Platform To Share <span style="color: #4989ff;">Promoter Wikid</span><br><br></h2>
            <ul>
              <li><a href="https://www.facebook.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#facebook"/></svg> Facebook</a></li>
              <li><a href="https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.text}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#twitter"/></svg> Twitter</a></li>
              <li><a href="https://www.linkedin.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#linkedIn"/></svg> LinkedIn</a></li>
              <li id="email-share"><a href="https://www.email.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#email"/></svg> Email</a></li>
            </ul>
            <h5 style="color: grey; border-bottom: 1px solid grey; cursor: none; padding-bottom: 2px;" >Click anywhere outside the share box to exit...<br></h5>
          </div>
        `;
    
        // Add event listener to close modal
        modal.querySelector('#modal-background').addEventListener('click', () => {
          modal.remove();
        });
    
        // Add event listener for email share
        modal.querySelector('#email-share').addEventListener('click', () => {
          const subject = shareData.title;
          const body = shareData.text + ' ' + shareData.url;
          const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
          // Check if mailto scheme is supported
          if (navigator.userAgent.match(/android/i)) {
            alert('Email sharing is not available on this device.');
          } else {
            window.location.href = mailtoUrl;
          }
        });
    
        // Add the modal to the page
        document.body.appendChild(modal);
      }
    });


            // SHARE FUNCTIONALITY 3
            document.getElementById('share-robin-vybz').addEventListener('click', () => {
              // Check if the browser supports the Web Share API
              if (navigator.share) {
                navigator.share({
                  title: 'Robin Vybz Is Now At Eastern Uganda Music Website',
                  text: 'Click Link And Get In Touch!...',
                  url: window.location.href,
                })
                .then(() => console.log('Shared successfully'))
                .catch((error) => console.error('Error sharing:', error));
              } else {
                // Fallback for browsers that don't support Web Share API
                const shareData = {
                  title: 'Robin Vybz Is Now At Eastern Uganda Music Website',
                  text: 'Click Link And Get In Touch!...',
                  url: window.location.href,
                };
            
                // Create a modal share dialog
                const modal = document.createElement('div');
                modal.innerHTML = `
                  <div class="modal-background" id="modal-background"></div>
                  <div class="modal-content">
                    <h2>Choose Platform To Share <span style="color: #4989ff;"> Robin Vybz</span><br><br></h2>
                    <ul>
                      <li><a href="https://www.facebook.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#facebook"/></svg> Facebook</a></li>
                      <li><a href="https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.text}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#twitter"/></svg> Twitter</a></li>
                      <li><a href="https://www.linkedin.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#linkedIn"/></svg> LinkedIn</a></li>
                      <li id="email-share"><a href="https://www.email.com/sharer/sharer.php?u=${shareData.url}" target="_blank"><svg class="bi" width="20" height="20"><use xlink:href="#email"/></svg> Email</a></li>
                    </ul>
                    <h5 style="color: grey; border-bottom: 1px solid grey; cursor: none; padding-bottom: 2px;" >Click anywhere outside the share box to exit...<br></h5>
                  </div>
                `;
            
                // Add event listener to close modal
                modal.querySelector('#modal-background').addEventListener('click', () => {
                  modal.remove();
                });
            
                // Add event listener for email share
                modal.querySelector('#email-share').addEventListener('click', () => {
                  const subject = shareData.title;
                  const body = shareData.text + ' ' + shareData.url;
                  const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
                  // Check if mailto scheme is supported
                  if (navigator.userAgent.match(/android/i)) {
                    alert('Email sharing is not available on this device.');
                  } else {
                    window.location.href = mailtoUrl;
                  }
                });
            
                // Add the modal to the page
                document.body.appendChild(modal);
              }
            });



// sliding images starts
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel .slide');
const totalSlides = slides.length;
const intervalTime = 4000; // Auto slide every 3 seconds

// Function to move the slides
function moveSlide(step) {
    currentIndex += step;

    // If we reach the end, go back to the start (circular behavior)
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    // Move the carousel container to show the current slide
    const newTransformValue = `translateX(${-currentIndex * 100}%)`;
    document.querySelector('.carousel').style.transform = newTransformValue;
}

// Automatically move the slides every 3 seconds
setInterval(() => {
    moveSlide(1);
}, intervalTime);


// sliding image ends



// background music icons start
window.onload = function() {
  const icons = document.querySelectorAll('.music-icon');

  icons.forEach(icon => {
      const randomLeft = Math.floor(Math.random() * 100) + "%";  // Randomize between 0% and 100%
      icon.style.left = randomLeft; // Set the left position of each icon
  });
};

// background musical icons end