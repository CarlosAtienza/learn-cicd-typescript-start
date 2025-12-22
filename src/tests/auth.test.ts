import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";
import { IncomingHttpHeaders } from "http";




describe("getApiKey", () => {
    test("returns null if missing header", () => {
        const headers: IncomingHttpHeaders = {};

        const result = getAPIKey(headers);
        expect(result).toBeNull();
    });

    test("returns API key when Authorization header is valid", () => {
        const headers: IncomingHttpHeaders = {
            authorization: "ApiKey abc123XYZ",
        };
        const result = getAPIKey(headers);
        expect(result).toBe("abc123XYZ");
    });
});