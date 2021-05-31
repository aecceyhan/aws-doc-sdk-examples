// Get service clients module and commands using CommonJS syntax.
const { run, params } = require("../../cloudwatch/src/cwl_deletesubscriptionfilter");
const { cwlClient } = require("../../cloudwatch/src/libs/cloudwatch-logs-cloudwatchLogsClient");

jest.mock("../../cloudwatch/src/libs/cloudwatch-logs-cloudwatchLogsClient.js");

describe("@aws-sdk/client-cloudwatch-logs mock", () => {
    it("should successfully mock CloudWatch Logs client", async () => {
        cwlClient.send.mockResolvedValue({ isMock: true });
        const response = await run(params);
        expect(response.isMock).toEqual(true);
    });
});
