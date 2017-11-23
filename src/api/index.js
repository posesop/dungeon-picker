import workstationsMock from 'mocks/workstations.json';

const api = {
    fetchWorkStations() {
        return new Promise((resolve) => {
            setTimeout(
                () => resolve(workstationsMock),
                500
            );
        });
    }
};

export default api;