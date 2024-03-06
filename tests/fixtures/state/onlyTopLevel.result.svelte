<script>
  let count = $state("bro");

  function test() {
    let b = "no";
    let c = count;
    return c;
  }

  let b = $state(test());
</script>
