var testsContext = require.context('./src', true, /[Ss]pec\.js$/);
testsContext.keys().forEach(testsContext);
