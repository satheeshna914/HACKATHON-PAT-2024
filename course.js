// Function to create YouTube player
function onYouTubeIframeAPIReady() {
    // Create YouTube players
    new YT.Player('video1', {
    videoId: 'VIDEO_ID_1', // Replace with your YouTube video ID
    playerVars: {
    'autoplay': 0,
    'controls': 1,
    'rel': 0
    }
    });
    
    new YT.Player('video2', {
    videoId: 'VIDEO_ID_2', // Replace with your YouTube video ID
    playerVars: {
    'autoplay': 0,
    'controls': 1,
    'rel': 0
    }
    });
    
    // Add more players as needed
    }
    