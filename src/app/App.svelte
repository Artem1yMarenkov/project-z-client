<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Home from "../pages/Home/index.svelte";

  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/"><Home /></Route>
  </div>
</Router>
