<script>
  let count = $state(0);
  let double = $derived(count * 2);

  $effect(() => {
    console.log(count, double);
  });
</script>
