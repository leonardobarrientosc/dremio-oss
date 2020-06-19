/*
 * Copyright (C) 2017-2019 Dremio Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { SERVER_STATUS_OK } from '@app/constants/serverStatus';

const isProductionBuild = process.env.NODE_ENV === 'production';

export const isProduction = () => {
  return isProductionBuild;
};

export default { // defaults, and defaults for unit tests
  serverStatus: SERVER_STATUS_OK,
  edition: 'OSS',
  intercomAppId: null,
  shouldEnableBugFiling: !isProductionBuild,
  shouldEnableRSOD: !isProductionBuild,
  showUserAndUserProperties: true,
  supportEmailTo: 'noreply@dremio.com',
  supportEmailSubjectForJobs: '',
  outsideCommunicationDisabled: false,
  lowerProvisioningSettingsEnabled: false,
  allowFileUploads: true,
  allowSpaceManagement: false,
  authType: 'oauth',
  subhourAccelerationPoliciesEnabled: false,
  versionInfo: {
    buildTime: 0,
    commit: {
      time: 0
    }
  },
  isReleaseBuild: process.env.DREMIO_RELEASE === 'true',
  logErrorsToSentry: process.env.SKIP_SENTRY_STEP !== 'true',
  ts: new Date(),
  whiteLabelUrl: 'dremio',
  ...((window && window.dremioConfig) || {})
};
