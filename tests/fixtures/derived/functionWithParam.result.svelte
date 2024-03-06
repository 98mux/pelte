<script>
  // @ts-nocheck
  function double2(count) {
    return count * 2;
  }

  let count = $state(1);
  let double = $derived(double2(count));
</script>
