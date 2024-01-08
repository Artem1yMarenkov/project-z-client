<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "../pages/Home/index.svelte";
  import SignInPage from "../pages/SignIn/index.svelte";
  import SignUpPage from "../pages/SignUp/index.svelte";

  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/"><Home /></Route>
    <Route path="/login" component={SignInPage}></Route>
    <Route path="/register" component={SignUpPage}></Route>
  </div>
</Router>
