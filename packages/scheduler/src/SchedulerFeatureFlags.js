/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */

/**
 * Enables profiling features in the scheduler for performance tracking.
 * When enabled, the scheduler collects detailed timing information
 * about task execution, which can be used for debugging and optimization.
 */
export const enableProfiling = false;

/**
 * The amount of time (in milliseconds) that the scheduler should yield
 * to the main thread before continuing work. This controls the frame interval
 * for cooperative scheduling.
 */
export const frameYieldMs = 5;

/**
 * The timeout (in milliseconds) for user-blocking priority tasks.
 * Tasks with this priority will be executed as soon as possible,
 * but will be interrupted if they take longer than this timeout.
 */
export const userBlockingPriorityTimeout = 250;

/**
 * The timeout (in milliseconds) for normal priority tasks.
 * Tasks with this priority will be executed after user-blocking tasks,
 * but will be interrupted if they take longer than this timeout.
 */
export const normalPriorityTimeout = 5000;

/**
 * The timeout (in milliseconds) for low priority tasks.
 * Tasks with this priority will be executed after normal priority tasks,
 * but will be interrupted if they take longer than this timeout.
 */
export const lowPriorityTimeout = 10000;

/**
 * Enables the requestPaint feature, which allows the scheduler to yield
 * to the browser's paint cycle. This helps ensure that the browser
 * can paint updates before continuing with more work.
 */
export const enableRequestPaint = true;

/**
 * Experimental flag to always yield the scheduler, regardless of task
 * priority or expiration time. This is used for testing and
 * experimentation purposes.
 */
export const enableAlwaysYieldScheduler = __EXPERIMENTAL__;
