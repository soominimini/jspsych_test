<!DOCTYPE html>
<html>
    <title>mTruk Test</title>
    <body>
<div id="experiment_link">You must accept the HIT to begin the experiment</div>.
</body>
<script>
// jsPsych has a method turkInfo() which can determine whether or not the
// HIT has been accepted.
var turkInfo = jsPsych.turkInfo();

// turkInfo.previewMode is true in two cases: when the HIT has not been
// accepted yet OR when the page is viewed outside of mechanical turk.
// The second property, outsideTurk, is true when the page is viewed
// outside of mechanical turk, so together, the statement will be true
// only when in Turk and when the HIT is not accepted yet.
if(!turkInfo.previewMode && !turkInfo.outsideTurk) {
  document.querySelector('#experiment_link').innerHMTL = '<a href="link_to_experiment.html" target="_blank">Click Here to Start Experiment</a>';
}

var turkInfo = jsPsych.turk.turkInfo();

// workerID
turkInfo.workerId

// hitID
turkInfo.hitId

// assignmentID
turkInfo.assignmentId
</script>

</html>