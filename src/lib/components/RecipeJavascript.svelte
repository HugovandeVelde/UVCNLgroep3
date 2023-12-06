<!-- ExternalScript.svelte -->
<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      const script = document.createElement('script');
      script.src = 'https://www.example.com/my.js';
      script.async = true;
  
      document.head.appendChild(script);
  
      return () => {
        // Cleanup if needed
        document.head.removeChild(script);
      };
    });
  </script>
  