
 const steps = document.querySelectorAll(".step");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const submitBtn = document.getElementById("submitBtn");
    const form = document.getElementById("applicationForm");
    const stepIndicator = document.getElementById("step-indicator");
    let currentStep = 0;

    function showStep(index) {
      steps.forEach((step, i) => step.classList.toggle("hidden", i !== index));
      stepIndicator.textContent = `Step ${index + 1} of ${steps.length}`;
      prevBtn.disabled = index === 0;
      nextBtn.classList.toggle("hidden", index === steps.length - 1);
      submitBtn.classList.toggle("hidden", index !== steps.length - 1);
    }

    nextBtn.addEventListener("click", () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      try {
        const res = await fetch("http://localhost:5000/api/job-application", {
          method: "POST",
          body: formData
        });
        const data = await res.json();
        if (res.ok) {
          form.classList.add("hidden");
          document.getElementById("successMessage").classList.remove("hidden");
        } else {
          alert(data.error || "Submission failed");
        }
      } catch (err) {
        alert("Error submitting form");
      }
    });

    showStep(currentStep);