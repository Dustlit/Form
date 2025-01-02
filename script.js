document.getElementById('event-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get the selected event packages and subscription
    const selectedSolarPackage = document.querySelector('input[name="solar-package"]:checked');
    const selectedPlanetsPackage = document.querySelector('input[name="planets-package"]:checked');
    const selectedCombinedPackage = document.querySelector('input[name="combined-package"]:checked');
    const selectedSubscription = document.querySelector('input[name="subscription"]:checked');
  
    if (!selectedSolarPackage && !selectedPlanetsPackage && !selectedCombinedPackage) {
      alert('Please select at least one event package.');
      return;
    }
  
    if (!selectedSubscription) {
      alert('Please select a subscription plan.');
      return;
    }
  
    const solarPackageAmount = selectedSolarPackage ? selectedSolarPackage.value : '';
    const planetsPackageAmount = selectedPlanetsPackage ? selectedPlanetsPackage.value : '';
    const combinedPackageAmount = selectedCombinedPackage ? selectedCombinedPackage.value : '';
    const subscriptionAmount = selectedSubscription.value;
  
    // Send the data to SheetDB API
    fetch('https://sheetdb.io/api/v1/YOUR_SHEETDB_API_KEY', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: {
          solar_package: solarPackageAmount,
          planets_package: planetsPackageAmount,
          combined_package: combinedPackageAmount,
          subscription_plan: subscriptionAmount
        }
      })
    })
    .then(response => response.json())
    .then(data => {
      alert('Your response has been submitted successfully.');
    })
    .catch(error => {
      alert('There was an error submitting your response. Please try again.');
    });
  });
  