(function(c, a, m) {
    var title = (c || document.title) + " " + (a || "-") + " ";
    setInterval(function() {
      title = title.substring(1) + title.charAt(0);
      document.title = title;
    }, m || 300);
  })(
    /* Tab Text */ "Portfolio | Anubhav Jhawar",
    /* Title Repeat Separator */ "-",
    /* Scroll Speed (in milleseconds) */ 300
  );